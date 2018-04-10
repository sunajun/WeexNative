//
//  SAJEventModule.m
//  weexNative
//
//  Created by 天安 on 2018/3/21.
//  Copyright © 2018年 天安. All rights reserved.
//

#import "SAJEventModule.h"
#import <WeexSDK.h>

@interface SAJEventModule()<WXModuleProtocol>

@end

@implementation SAJEventModule
@synthesize weexInstance;
WX_EXPORT_METHOD_SYNC(@selector(getString))
//WX_EXPORT_METHOD(@selector(getString))
- (NSString*)getString{
    return @"回调返回数据";
}
@end
