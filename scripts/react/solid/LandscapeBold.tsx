import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLandscapeBold = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M8.58 3.047c-.721.138-1.381.801-1.536 1.545a5.958 5.958 0 0 0-.044.81V6h10v-.598c0-.329-.02-.693-.044-.81-.159-.762-.818-1.411-1.573-1.549-.302-.055-6.512-.051-6.803.004M5.331 7.58c-1.038.227-1.879 1.024-2.217 2.101-.093.297-.094.311-.094 2.319s.001 2.022.094 2.319c.384 1.224 1.336 2.016 2.596 2.16.475.055 12.105.055 12.58 0 1.26-.144 2.212-.936 2.596-2.16.093-.297.094-.311.094-2.319s-.001-2.022-.094-2.32c-.314-1.004-1.022-1.718-2.048-2.066-.208-.071-.514-.074-6.738-.081-5.371-.006-6.564.002-6.769.047M7 18.598c0 .329.02.693.044.81.157.75.798 1.391 1.548 1.548.144.03 1.229.044 3.408.044s3.264-.014 3.408-.044a2.062 2.062 0 0 0 1.548-1.548c.024-.117.044-.481.044-.81V18H7v.598'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLandscapeBold);
export default ForwardRef;
