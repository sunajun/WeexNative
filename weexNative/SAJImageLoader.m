//
//  SAJImageLoader.m
//  weexNative
//
//  Created by 天安 on 2018/3/21.
//  Copyright © 2018年 天安. All rights reserved.
//

#import "SAJImageLoader.h"
#import <WeexSDK.h>
#import <AFNetworking.h>
@interface SAJImageLoader()<WXImgLoaderProtocol,WXImageOperationProtocol>
@property(nonatomic, strong) AFHTTPSessionManager *sessionManager;
@property(nonatomic, strong) NSURLSessionDataTask *dataTask;
@end

@implementation SAJImageLoader
- (id<WXImageOperationProtocol>)downloadImageWithURL:(NSString *)url imageFrame:(CGRect)imageFrame userInfo:(NSDictionary *)options completed:(void (^)(UIImage *, NSError *, BOOL))completedBlock{
    self.dataTask = [self.sessionManager GET:url parameters:nil progress:nil success:^(NSURLSessionDataTask * _Nonnull task, id  _Nullable responseObject) {
        NSData *imageData = responseObject;
        UIImage *image = [UIImage imageWithData:imageData];
        //      设置图片的大小
        if (image&&!CGRectEqualToRect(imageFrame, CGRectZero)) {
            //         开启图片上下文
            UIGraphicsBeginImageContext(imageFrame.size);
            //          绘制图片
            [image drawInRect:imageFrame];
            //          取出图片
            image = UIGraphicsGetImageFromCurrentImageContext();
            //          关闭图形上下文
            UIGraphicsEndImageContext();
        }
        //      成功回调
        completedBlock(image,nil,YES);
        
    } failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull error) {
        completedBlock(nil,error,YES);
    }];
    return  self;
}

- (void)cancel{
    [self.dataTask cancel];
}

- (AFHTTPSessionManager *)sessionManager{
    if (!_sessionManager) {
        _sessionManager = [AFHTTPSessionManager manager];
        _sessionManager.responseSerializer = [AFHTTPResponseSerializer serializer];
    }
    return _sessionManager;
}
@end
