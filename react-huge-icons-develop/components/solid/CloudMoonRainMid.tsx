import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCloudMoonRainMid = (
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
            d='M17 7.5c1.876 0 3.566.796 4.75 2.064a5 5 0 0 0-8.468-4.907 8.535 8.535 0 0 1 2.958 2.887c.25-.029.503-.044.76-.044Zm-5.888 10.482c.136.278.275.626.344 1.018h1.088a3.82 3.82 0 0 1 .344-1.018c.2-.406.45-.77.674-1.061a9.3 9.3 0 0 1 .822-.929l.094-.09a1.5 1.5 0 0 1 2.044 0l.094.09a9.3 9.3 0 0 1 .823.928c.223.291.474.656.673 1.062.113.229.226.506.301.816A5.002 5.002 0 0 0 21 11a4.992 4.992 0 0 0-4-2c-.545 0-1.07.087-1.561.249a7.028 7.028 0 0 0-2.983-3.338A7 7 0 1 0 5.78 18.217a4.56 4.56 0 0 1 .107-.235c.2-.406.45-.77.674-1.061a9.301 9.301 0 0 1 .822-.929l.094-.09a1.5 1.5 0 0 1 2.044 0l.094.09a9.295 9.295 0 0 1 .822.928c.224.291.475.656.674 1.062ZM10 19.5c0 1.105-.672 1.5-1.5 1.5S7 20.605 7 19.5 8.5 17 8.5 17s1.5 1.395 1.5 2.5Zm5.5 1.5c.828 0 1.5-.395 1.5-1.5S15.5 17 15.5 17 14 18.395 14 19.5s.672 1.5 1.5 1.5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudMoonRainMid);
export default ForwardRef;
