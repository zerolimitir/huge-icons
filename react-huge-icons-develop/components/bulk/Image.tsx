import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgImage = (
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
            d='m18.729 9.819 2.38 1.587A2 2 0 0 1 22 13.07V16a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-2.132a1 1 0 0 1 1.555-.832l1.717 1.145a4 4 0 0 0 5.047-.5l3.362-3.362a4 4 0 0 1 5.048-.5Z'
            opacity={0.4}
        />
        <circle cx={7} cy={7} r={3} fill='currentColor' />
    </svg>
);
const ForwardRef = forwardRef(SvgImage);
export default ForwardRef;
