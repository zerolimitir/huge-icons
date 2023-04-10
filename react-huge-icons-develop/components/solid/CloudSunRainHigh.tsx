import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCloudSunRainHigh = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        aria-labelledby={titleId}
        {...props}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M15 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75ZM2 13c0 1.727.626 3.309 1.663 4.53.066-.203.146-.387.225-.548.2-.406.45-.77.674-1.061a9.301 9.301 0 0 1 .822-.929l.094-.09a1.5 1.5 0 0 1 2.044 0l.094.09a9.301 9.301 0 0 1 .823.928 6.4 6.4 0 0 1 .673 1.062c.136.278.275.626.344 1.018H10l.06-.08a9.3 9.3 0 0 1 .823-.928l.094-.09a1.5 1.5 0 0 1 2.044 0l.094.09A9.3 9.3 0 0 1 13.999 18h.546a3.82 3.82 0 0 1 .343-1.018c.2-.406.45-.77.674-1.061a9.3 9.3 0 0 1 .822-.929l.094-.09a1.5 1.5 0 0 1 2.044 0l.094.09a9.3 9.3 0 0 1 .823.928c.223.291.474.656.673 1.062.192.391.388.922.388 1.518v.071a5 5 0 0 0-5.06-8.323A7.002 7.002 0 0 0 1.999 13Zm10 9c.828 0 1.5-.395 1.5-1.5S12 18 12 18s-1.5 1.395-1.5 2.5.672 1.5 1.5 1.5Zm8.48-17.42a.75.75 0 0 0-1.06-1.06l-.708.707a.75.75 0 0 0 1.06 1.06l.708-.707ZM22.75 9a.75.75 0 0 1-.75.75h-1a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .75.75ZM15 5a4 4 0 0 1 3.996 3.813 6.497 6.497 0 0 0-2.756-.269 8.534 8.534 0 0 0-3.207-3.028A3.982 3.982 0 0 1 15 5ZM8 18.5c0 1.105-.672 1.5-1.5 1.5S5 19.605 5 18.5 6.5 16 6.5 16 8 17.395 8 18.5Zm9.5 1.5c.828 0 1.5-.395 1.5-1.5S17.5 16 17.5 16 16 17.395 16 18.5s.672 1.5 1.5 1.5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudSunRainHigh);
export default ForwardRef;
