import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCloudRainHigh = (
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
            d='M2 10a6.988 6.988 0 0 0 2.661 5.494c.133-.212.27-.405.4-.573a9.301 9.301 0 0 1 .823-.929l.094-.09a1.5 1.5 0 0 1 2.044 0l.094.09a9.301 9.301 0 0 1 .823.928 6.4 6.4 0 0 1 .673 1.062c.136.278.275.626.344 1.018H10l.06-.08a9.3 9.3 0 0 1 .823-.928l.094-.09a1.5 1.5 0 0 1 2.044 0l.094.09A9.3 9.3 0 0 1 13.999 17h.046a3.82 3.82 0 0 1 .343-1.018c.2-.406.45-.77.674-1.061a9.3 9.3 0 0 1 .822-.929l.094-.09a1.5 1.5 0 0 1 2.044 0l.094.09a9.3 9.3 0 0 1 .823.928c.223.291.474.656.673 1.062.034.069.068.142.1.219a5 5 0 0 0-4.274-8.952A7.002 7.002 0 0 0 2 10Zm5 9c.828 0 1.5-.395 1.5-1.5S7 15 7 15s-1.5 1.395-1.5 2.5S6.172 19 7 19Zm11.5-1.5c0 1.105-.672 1.5-1.5 1.5s-1.5-.395-1.5-1.5S17 15 17 15s1.5 1.395 1.5 2.5ZM12 21c.828 0 1.5-.395 1.5-1.5S12 17 12 17s-1.5 1.395-1.5 2.5.672 1.5 1.5 1.5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudRainHigh);
export default ForwardRef;
