import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCloudRainMid = (
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
            d='M2 11a7 7 0 0 0 3.78 6.217 4.56 4.56 0 0 1 .108-.235c.2-.406.45-.77.674-1.061a9.301 9.301 0 0 1 .822-.929l.094-.09a1.5 1.5 0 0 1 2.044 0l.094.09a9.295 9.295 0 0 1 .822.928c.224.291.475.656.674 1.062.136.278.275.626.344 1.018h1.088a3.82 3.82 0 0 1 .344-1.018c.2-.406.45-.77.674-1.061a9.3 9.3 0 0 1 .822-.929l.094-.09a1.5 1.5 0 0 1 2.044 0l.094.09a9.3 9.3 0 0 1 .823.928c.223.291.474.656.673 1.062.113.229.226.506.301.816a5 5 0 1 0-2.975-9.549A7.002 7.002 0 0 0 2 11Zm8 7.5c0 1.105-.672 1.5-1.5 1.5S7 19.605 7 18.5 8.5 16 8.5 16s1.5 1.395 1.5 2.5Zm5.5 1.5c.828 0 1.5-.395 1.5-1.5S15.5 16 15.5 16 14 17.395 14 18.5s.672 1.5 1.5 1.5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudRainMid);
export default ForwardRef;
