import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLoadingDoted = (
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
        <circle cx={12} cy={4} r={2} fill='currentColor' opacity={0.4} />
        <circle cx={12} cy={20} r={2} fill='currentColor' opacity={0.4} />
        <circle cx={18.928} cy={8} r={2} fill='currentColor' transform='rotate(60 18.928 8)' />
        <circle
            cx={5.072}
            cy={16}
            r={2}
            fill='currentColor'
            opacity={0.4}
            transform='rotate(60 5.072 16)'
        />
        <circle
            cx={18.928}
            cy={16}
            r={2}
            fill='currentColor'
            opacity={0.4}
            transform='rotate(120 18.928 16)'
        />
        <circle
            cx={5.072}
            cy={8}
            r={2}
            fill='currentColor'
            opacity={0.4}
            transform='rotate(120 5.072 8)'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLoadingDoted);
export default ForwardRef;
