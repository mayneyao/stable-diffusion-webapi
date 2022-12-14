/* tslint:disable */
/* eslint-disable */
/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface ExtrasSingleImageRequest
 */
export interface ExtrasSingleImageRequest {
    /**
     * Sets the resize mode: 0 to upscale by upscaling_resize amount, 1 to upscale up to upscaling_resize_h x upscaling_resize_w.
     * @type {number}
     * @memberof ExtrasSingleImageRequest
     */
    'resize_mode'?: ExtrasSingleImageRequestResizeModeEnum;
    /**
     * Should the backend return the generated image?
     * @type {boolean}
     * @memberof ExtrasSingleImageRequest
     */
    'show_extras_results'?: boolean;
    /**
     * Sets the visibility of GFPGAN, values should be between 0 and 1.
     * @type {number}
     * @memberof ExtrasSingleImageRequest
     */
    'gfpgan_visibility'?: number;
    /**
     * Sets the visibility of CodeFormer, values should be between 0 and 1.
     * @type {number}
     * @memberof ExtrasSingleImageRequest
     */
    'codeformer_visibility'?: number;
    /**
     * Sets the weight of CodeFormer, values should be between 0 and 1.
     * @type {number}
     * @memberof ExtrasSingleImageRequest
     */
    'codeformer_weight'?: number;
    /**
     * By how much to upscale the image, only used when resize_mode=0.
     * @type {number}
     * @memberof ExtrasSingleImageRequest
     */
    'upscaling_resize'?: number;
    /**
     * Target width for the upscaler to hit. Only used when resize_mode=1.
     * @type {number}
     * @memberof ExtrasSingleImageRequest
     */
    'upscaling_resize_w'?: number;
    /**
     * Target height for the upscaler to hit. Only used when resize_mode=1.
     * @type {number}
     * @memberof ExtrasSingleImageRequest
     */
    'upscaling_resize_h'?: number;
    /**
     * Should the upscaler crop the image to fit in the choosen size?
     * @type {boolean}
     * @memberof ExtrasSingleImageRequest
     */
    'upscaling_crop'?: boolean;
    /**
     * The name of the main upscaler to use, it has to be one of this list: None , Lanczos , Nearest , LDSR , ScuNET GAN , ScuNET PSNR , SwinIR 4x , ESRGAN_4x
     * @type {string}
     * @memberof ExtrasSingleImageRequest
     */
    'upscaler_1'?: string;
    /**
     * The name of the secondary upscaler to use, it has to be one of this list: None , Lanczos , Nearest , LDSR , ScuNET GAN , ScuNET PSNR , SwinIR 4x , ESRGAN_4x
     * @type {string}
     * @memberof ExtrasSingleImageRequest
     */
    'upscaler_2'?: string;
    /**
     * Sets the visibility of secondary upscaler, values should be between 0 and 1.
     * @type {number}
     * @memberof ExtrasSingleImageRequest
     */
    'extras_upscaler_2_visibility'?: number;
    /**
     * Should the upscaler run before restoring faces?
     * @type {boolean}
     * @memberof ExtrasSingleImageRequest
     */
    'upscale_first'?: boolean;
    /**
     * Image to work on, must be a Base64 string containing the image\'s data.
     * @type {string}
     * @memberof ExtrasSingleImageRequest
     */
    'image'?: string;
}

export const ExtrasSingleImageRequestResizeModeEnum = {
    NUMBER_0: 0,
    NUMBER_1: 1
} as const;

export type ExtrasSingleImageRequestResizeModeEnum = typeof ExtrasSingleImageRequestResizeModeEnum[keyof typeof ExtrasSingleImageRequestResizeModeEnum];


