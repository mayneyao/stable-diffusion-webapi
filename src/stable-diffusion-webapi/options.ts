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


// May contain unused imports in some cases
// @ts-ignore
import { Null } from './null';

/**
 * 
 * @export
 * @interface Options
 */
export interface Options {
    /**
     * Always save all generated images
     * @type {boolean}
     * @memberof Options
     */
    'samples_save'?: boolean;
    /**
     * File format for images
     * @type {string}
     * @memberof Options
     */
    'samples_format'?: string;
    /**
     * Images filename pattern
     * @type {string}
     * @memberof Options
     */
    'samples_filename_pattern'?: string;
    /**
     * Add number to filename when saving
     * @type {boolean}
     * @memberof Options
     */
    'save_images_add_number'?: boolean;
    /**
     * Always save all generated image grids
     * @type {boolean}
     * @memberof Options
     */
    'grid_save'?: boolean;
    /**
     * File format for grids
     * @type {string}
     * @memberof Options
     */
    'grid_format'?: string;
    /**
     * Add extended info (seed, prompt) to filename when saving grid
     * @type {boolean}
     * @memberof Options
     */
    'grid_extended_filename'?: boolean;
    /**
     * Do not save grids consisting of one picture
     * @type {boolean}
     * @memberof Options
     */
    'grid_only_if_multiple'?: boolean;
    /**
     * Prevent empty spots in grid (when set to autodetect)
     * @type {boolean}
     * @memberof Options
     */
    'grid_prevent_empty_spots'?: boolean;
    /**
     * Grid row count; use -1 for autodetect and 0 for it to be same as batch size
     * @type {number}
     * @memberof Options
     */
    'n_rows'?: number;
    /**
     * Save text information about generation parameters as chunks to png files
     * @type {boolean}
     * @memberof Options
     */
    'enable_pnginfo'?: boolean;
    /**
     * Create a text file next to every image with generation parameters.
     * @type {boolean}
     * @memberof Options
     */
    'save_txt'?: boolean;
    /**
     * Save a copy of image before doing face restoration.
     * @type {boolean}
     * @memberof Options
     */
    'save_images_before_face_restoration'?: boolean;
    /**
     * Save a copy of image before applying highres fix.
     * @type {boolean}
     * @memberof Options
     */
    'save_images_before_highres_fix'?: boolean;
    /**
     * Save a copy of image before applying color correction to img2img results
     * @type {boolean}
     * @memberof Options
     */
    'save_images_before_color_correction'?: boolean;
    /**
     * Quality for saved jpeg images
     * @type {number}
     * @memberof Options
     */
    'jpeg_quality'?: number;
    /**
     * If PNG image is larger than 4MB or any dimension is larger than 4000, downscale and save copy as JPG
     * @type {boolean}
     * @memberof Options
     */
    'export_for_4chan'?: boolean;
    /**
     * Use original name for output filename during batch process in extras tab
     * @type {boolean}
     * @memberof Options
     */
    'use_original_name_batch'?: boolean;
    /**
     * When using \'Save\' button, only save a single selected image
     * @type {boolean}
     * @memberof Options
     */
    'save_selected_only'?: boolean;
    /**
     * Do not add watermark to images
     * @type {boolean}
     * @memberof Options
     */
    'do_not_add_watermark'?: boolean;
    /**
     * Directory for temporary images; leave empty for default
     * @type {Null}
     * @memberof Options
     */
    'temp_dir'?: Null;
    /**
     * Cleanup non-default temporary directory when starting webui
     * @type {Null}
     * @memberof Options
     */
    'clean_temp_dir_at_start'?: Null;
    /**
     * Output directory for images; if empty, defaults to three directories below
     * @type {string}
     * @memberof Options
     */
    'outdir_samples'?: string;
    /**
     * Output directory for txt2img images
     * @type {string}
     * @memberof Options
     */
    'outdir_txt2img_samples'?: string;
    /**
     * Output directory for img2img images
     * @type {string}
     * @memberof Options
     */
    'outdir_img2img_samples'?: string;
    /**
     * Output directory for images from extras tab
     * @type {string}
     * @memberof Options
     */
    'outdir_extras_samples'?: string;
    /**
     * Output directory for grids; if empty, defaults to two directories below
     * @type {string}
     * @memberof Options
     */
    'outdir_grids'?: string;
    /**
     * Output directory for txt2img grids
     * @type {string}
     * @memberof Options
     */
    'outdir_txt2img_grids'?: string;
    /**
     * Output directory for img2img grids
     * @type {string}
     * @memberof Options
     */
    'outdir_img2img_grids'?: string;
    /**
     * Directory for saving images using the Save button
     * @type {string}
     * @memberof Options
     */
    'outdir_save'?: string;
    /**
     * Save images to a subdirectory
     * @type {boolean}
     * @memberof Options
     */
    'save_to_dirs'?: boolean;
    /**
     * Save grids to a subdirectory
     * @type {boolean}
     * @memberof Options
     */
    'grid_save_to_dirs'?: boolean;
    /**
     * When using \"Save\" button, save images to a subdirectory
     * @type {boolean}
     * @memberof Options
     */
    'use_save_to_dirs_for_ui'?: boolean;
    /**
     * Directory name pattern
     * @type {string}
     * @memberof Options
     */
    'directories_filename_pattern'?: string;
    /**
     * Max prompt words for [prompt_words] pattern
     * @type {number}
     * @memberof Options
     */
    'directories_max_prompt_words'?: number;
    /**
     * Tile size for ESRGAN upscalers. 0 = no tiling.
     * @type {number}
     * @memberof Options
     */
    'ESRGAN_tile'?: number;
    /**
     * Tile overlap, in pixels for ESRGAN upscalers. Low values = visible seam.
     * @type {number}
     * @memberof Options
     */
    'ESRGAN_tile_overlap'?: number;
    /**
     * Select which Real-ESRGAN models to show in the web UI. (Requires restart)
     * @type {Array<any>}
     * @memberof Options
     */
    'realesrgan_enabled_models'?: Array<any>;
    /**
     * Upscaler for img2img
     * @type {Null}
     * @memberof Options
     */
    'upscaler_for_img2img'?: Null;
    /**
     * Upscale latent space image when doing hires. fix
     * @type {boolean}
     * @memberof Options
     */
    'use_scale_latent_for_hires_fix'?: boolean;
    /**
     * Face restoration model
     * @type {string}
     * @memberof Options
     */
    'face_restoration_model'?: string;
    /**
     * CodeFormer weight parameter; 0 = maximum effect; 1 = minimum effect
     * @type {number}
     * @memberof Options
     */
    'code_former_weight'?: number;
    /**
     * Move face restoration model from VRAM into RAM after processing
     * @type {boolean}
     * @memberof Options
     */
    'face_restoration_unload'?: boolean;
    /**
     * VRAM usage polls per second during generation. Set to 0 to disable.
     * @type {number}
     * @memberof Options
     */
    'memmon_poll_rate'?: number;
    /**
     * Always print all generation info to standard output
     * @type {boolean}
     * @memberof Options
     */
    'samples_log_stdout'?: boolean;
    /**
     * Add a second progress bar to the console that shows progress for an entire job.
     * @type {boolean}
     * @memberof Options
     */
    'multiple_tqdm'?: boolean;
    /**
     * Move VAE and CLIP to RAM when training if possible. Saves VRAM.
     * @type {boolean}
     * @memberof Options
     */
    'unload_models_when_training'?: boolean;
    /**
     * Turn on pin_memory for DataLoader. Makes training slightly faster but can increase memory usage.
     * @type {Null}
     * @memberof Options
     */
    'pin_memory'?: Null;
    /**
     * Saves Optimizer state as separate *.optim file. Training can be resumed with HN itself and matching optim file.
     * @type {boolean}
     * @memberof Options
     */
    'save_optimizer_state'?: boolean;
    /**
     * Filename word regex
     * @type {string}
     * @memberof Options
     */
    'dataset_filename_word_regex'?: string;
    /**
     * Filename join string
     * @type {string}
     * @memberof Options
     */
    'dataset_filename_join_string'?: string;
    /**
     * Number of repeats for a single input image per epoch; used only for displaying epoch number
     * @type {number}
     * @memberof Options
     */
    'training_image_repeats_per_epoch'?: number;
    /**
     * Save an csv containing the loss to log directory every N steps, 0 to disable
     * @type {number}
     * @memberof Options
     */
    'training_write_csv_every'?: number;
    /**
     * Use cross attention optimizations while training
     * @type {boolean}
     * @memberof Options
     */
    'training_xattention_optimizations'?: boolean;
    /**
     * Stable Diffusion checkpoint
     * @type {string}
     * @memberof Options
     */
    'sd_model_checkpoint'?: string;
    /**
     * Checkpoints to cache in RAM
     * @type {number}
     * @memberof Options
     */
    'sd_checkpoint_cache'?: number;
    /**
     * SD VAE
     * @type {string}
     * @memberof Options
     */
    'sd_vae'?: string;
    /**
     * Ignore selected VAE for stable diffusion checkpoints that have their own .vae.pt next to them
     * @type {Null}
     * @memberof Options
     */
    'sd_vae_as_default'?: Null;
    /**
     * Hypernetwork
     * @type {string}
     * @memberof Options
     */
    'sd_hypernetwork'?: string;
    /**
     * Hypernetwork strength
     * @type {number}
     * @memberof Options
     */
    'sd_hypernetwork_strength'?: number;
    /**
     * Inpainting conditioning mask strength
     * @type {number}
     * @memberof Options
     */
    'inpainting_mask_weight'?: number;
    /**
     * Apply color correction to img2img results to match original colors.
     * @type {boolean}
     * @memberof Options
     */
    'img2img_color_correction'?: boolean;
    /**
     * With img2img, do exactly the amount of steps the slider specifies (normally you\'d do less with less denoising).
     * @type {boolean}
     * @memberof Options
     */
    'img2img_fix_steps'?: boolean;
    /**
     * Enable quantization in K samplers for sharper and cleaner results. This may change existing seeds. Requires restart to apply.
     * @type {boolean}
     * @memberof Options
     */
    'enable_quantization'?: boolean;
    /**
     * Emphasis: use (text) to make model pay more attention to text and [text] to make it pay less attention
     * @type {boolean}
     * @memberof Options
     */
    'enable_emphasis'?: boolean;
    /**
     * Use old emphasis implementation. Can be useful to reproduce old seeds.
     * @type {boolean}
     * @memberof Options
     */
    'use_old_emphasis_implementation'?: boolean;
    /**
     * Make K-diffusion samplers produce same images in a batch as when making a single image
     * @type {boolean}
     * @memberof Options
     */
    'enable_batch_seeds'?: boolean;
    /**
     * Increase coherency by padding from the last comma within n tokens when using more than 75 tokens
     * @type {number}
     * @memberof Options
     */
    'comma_padding_backtrack'?: number;
    /**
     * Filter NSFW content
     * @type {boolean}
     * @memberof Options
     */
    'filter_nsfw'?: boolean;
    /**
     * Clip skip
     * @type {number}
     * @memberof Options
     */
    'CLIP_stop_at_last_layers'?: number;
    /**
     * Allowed categories for random artists selection when using the Roll button
     * @type {Array<any>}
     * @memberof Options
     */
    'random_artist_categories'?: Array<any>;
    /**
     * Interrogate: keep models in VRAM
     * @type {boolean}
     * @memberof Options
     */
    'interrogate_keep_models_in_memory'?: boolean;
    /**
     * Interrogate: use artists from artists.csv
     * @type {boolean}
     * @memberof Options
     */
    'interrogate_use_builtin_artists'?: boolean;
    /**
     * Interrogate: include ranks of model tags matches in results (Has no effect on caption-based interrogators).
     * @type {boolean}
     * @memberof Options
     */
    'interrogate_return_ranks'?: boolean;
    /**
     * Interrogate: num_beams for BLIP
     * @type {number}
     * @memberof Options
     */
    'interrogate_clip_num_beams'?: number;
    /**
     * Interrogate: minimum description length (excluding artists, etc..)
     * @type {number}
     * @memberof Options
     */
    'interrogate_clip_min_length'?: number;
    /**
     * Interrogate: maximum description length
     * @type {number}
     * @memberof Options
     */
    'interrogate_clip_max_length'?: number;
    /**
     * CLIP: maximum number of lines in text file (0 = No limit)
     * @type {number}
     * @memberof Options
     */
    'interrogate_clip_dict_limit'?: number;
    /**
     * Interrogate: deepbooru score threshold
     * @type {number}
     * @memberof Options
     */
    'interrogate_deepbooru_score_threshold'?: number;
    /**
     * Interrogate: deepbooru sort alphabetically
     * @type {boolean}
     * @memberof Options
     */
    'deepbooru_sort_alpha'?: boolean;
    /**
     * use spaces for tags in deepbooru
     * @type {boolean}
     * @memberof Options
     */
    'deepbooru_use_spaces'?: boolean;
    /**
     * escape (\\) brackets in deepbooru (so they are used as literal brackets and not for emphasis)
     * @type {boolean}
     * @memberof Options
     */
    'deepbooru_escape'?: boolean;
    /**
     * Show progressbar
     * @type {boolean}
     * @memberof Options
     */
    'show_progressbar'?: boolean;
    /**
     * Show image creation progress every N sampling steps. Set to 0 to disable. Set to -1 to show after completion of batch.
     * @type {number}
     * @memberof Options
     */
    'show_progress_every_n_steps'?: number;
    /**
     * Show previews of all images generated in a batch as a grid
     * @type {boolean}
     * @memberof Options
     */
    'show_progress_grid'?: boolean;
    /**
     * Show grid in results for web
     * @type {boolean}
     * @memberof Options
     */
    'return_grid'?: boolean;
    /**
     * Do not show any images in results for web
     * @type {boolean}
     * @memberof Options
     */
    'do_not_show_images'?: boolean;
    /**
     * Add model hash to generation information
     * @type {boolean}
     * @memberof Options
     */
    'add_model_hash_to_info'?: boolean;
    /**
     * Add model name to generation information
     * @type {boolean}
     * @memberof Options
     */
    'add_model_name_to_info'?: boolean;
    /**
     * When reading generation parameters from text into UI (from PNG info or pasted text), do not change the selected model/checkpoint.
     * @type {boolean}
     * @memberof Options
     */
    'disable_weights_auto_swap'?: boolean;
    /**
     * Send seed when sending prompt or image to other interface
     * @type {boolean}
     * @memberof Options
     */
    'send_seed'?: boolean;
    /**
     * Font for image grids that have text
     * @type {string}
     * @memberof Options
     */
    'font'?: string;
    /**
     * Enable full page image viewer
     * @type {boolean}
     * @memberof Options
     */
    'js_modal_lightbox'?: boolean;
    /**
     * Show images zoomed in by default in full page image viewer
     * @type {boolean}
     * @memberof Options
     */
    'js_modal_lightbox_initially_zoomed'?: boolean;
    /**
     * Show generation progress in window title.
     * @type {boolean}
     * @memberof Options
     */
    'show_progress_in_title'?: boolean;
    /**
     * Quicksettings list
     * @type {string}
     * @memberof Options
     */
    'quicksettings'?: string;
    /**
     * Localization (requires restart)
     * @type {string}
     * @memberof Options
     */
    'localization'?: string;
    /**
     * Hide samplers in user interface (requires restart)
     * @type {Array<any>}
     * @memberof Options
     */
    'hide_samplers'?: Array<any>;
    /**
     * eta (noise multiplier) for DDIM
     * @type {number}
     * @memberof Options
     */
    'eta_ddim'?: number;
    /**
     * eta (noise multiplier) for ancestral samplers
     * @type {number}
     * @memberof Options
     */
    'eta_ancestral'?: number;
    /**
     * img2img DDIM discretize
     * @type {string}
     * @memberof Options
     */
    'ddim_discretize'?: string;
    /**
     * sigma churn
     * @type {number}
     * @memberof Options
     */
    's_churn'?: number;
    /**
     * sigma tmin
     * @type {number}
     * @memberof Options
     */
    's_tmin'?: number;
    /**
     * sigma noise
     * @type {number}
     * @memberof Options
     */
    's_noise'?: number;
    /**
     * Eta noise seed delta
     * @type {number}
     * @memberof Options
     */
    'eta_noise_seed_delta'?: number;
    /**
     * Disable those extensions
     * @type {Array<any>}
     * @memberof Options
     */
    'disabled_extensions'?: Array<any>;
}

