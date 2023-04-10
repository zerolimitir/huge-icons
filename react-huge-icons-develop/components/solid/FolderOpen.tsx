import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFolderOpen = (
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
            d='M17 4a3 3 0 0 1 2.959 2.5H4V5a3 3 0 0 1 3-3h2.57a3 3 0 0 1 1.843.634l.94.732A3 3 0 0 0 14.199 4H17ZM3.474 8h17.052a2 2 0 0 1 1.956 2.42l-1.805 8.418A4 4 0 0 1 16.767 22H7.233a4 4 0 0 1-3.912-3.162L1.518 10.42A2 2 0 0 1 3.474 8Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFolderOpen);
export default ForwardRef;
