import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCloudSunRainMid = (
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
            d='M15 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm-3.888 17.732c.136.278.275.626.344 1.018h1.088a3.82 3.82 0 0 1 .344-1.018c.2-.406.45-.77.674-1.061a9.3 9.3 0 0 1 .822-.929l.094-.09a1.5 1.5 0 0 1 2.044 0l.094.09a9.3 9.3 0 0 1 .823.928c.223.291.474.656.673 1.062.113.229.226.506.301.816a5.002 5.002 0 0 0 .363-9.474A4.99 4.99 0 0 0 17 10c-.545 0-1.07.087-1.561.249a7.026 7.026 0 0 0-3.63-3.662 7 7 0 0 0-6.03 12.63 4.56 4.56 0 0 1 .11-.235c.199-.406.449-.77.673-1.061a9.301 9.301 0 0 1 .822-.929l.094-.09a1.5 1.5 0 0 1 2.044 0l.094.09a9.295 9.295 0 0 1 .822.928c.224.291.475.656.674 1.062ZM10 20.5c0 1.105-.672 1.5-1.5 1.5S7 21.605 7 20.5 8.5 18 8.5 18s1.5 1.395 1.5 2.5Zm7 0c0 1.105-.672 1.5-1.5 1.5s-1.5-.395-1.5-1.5 1.5-2.5 1.5-2.5 1.5 1.395 1.5 2.5Zm3.48-15.92a.75.75 0 0 0-1.06-1.06l-.708.707a.75.75 0 0 0 1.06 1.06l.708-.707ZM22.75 9a.75.75 0 0 1-.75.75h-1a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .75.75ZM15 5a4 4 0 0 1 3.996 3.813 6.497 6.497 0 0 0-2.756-.269 8.534 8.534 0 0 0-3.207-3.028A3.982 3.982 0 0 1 15 5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudSunRainMid);
export default ForwardRef;
