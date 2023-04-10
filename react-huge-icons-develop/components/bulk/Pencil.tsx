import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPencil = (
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
            d='M16.242 3.816a2.787 2.787 0 0 1 3.942 3.942L8.728 19.213a3.95 3.95 0 0 1-2.055 1.088l-2.95.562a.5.5 0 0 1-.586-.585l.562-2.95a3.952 3.952 0 0 1 1.088-2.056L16.243 3.816Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M20.184 7.758a2.787 2.787 0 1 0-3.942-3.942l-1.856 2.015 3.783 3.783 2.015-1.856Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPencil);
export default ForwardRef;
