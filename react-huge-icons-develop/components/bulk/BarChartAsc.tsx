import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBarChartAsc = (
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
            d='M20 3a2 2 0 0 1 2 2v14a2 2 0 1 1-4 0V5a2 2 0 0 1 2-2ZM4 11a2 2 0 0 1 2 2v6a2 2 0 1 1-4 0v-6a2 2 0 0 1 2-2Z'
            opacity={0.4}
        />
        <path fill='currentColor' d='M12 7a2 2 0 0 1 2 2v10a2 2 0 1 1-4 0V9a2 2 0 0 1 2-2Z' />
    </svg>
);
const ForwardRef = forwardRef(SvgBarChartAsc);
export default ForwardRef;
