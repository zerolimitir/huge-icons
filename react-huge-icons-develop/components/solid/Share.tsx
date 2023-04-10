import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgShare = (
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
            d='M22 5.5a3.5 3.5 0 0 1-6.225 2.196.752.752 0 0 1-.07.04l-6.738 3.37a.746.746 0 0 1-.074.031 3.508 3.508 0 0 1 0 1.726c.025.009.05.02.074.032l6.737 3.369a.734.734 0 0 1 .07.04 3.5 3.5 0 1 1-.668 1.334.73.73 0 0 1-.073-.033l-6.737-3.369a.74.74 0 0 1-.07-.04 3.5 3.5 0 1 1 0-4.393.76.76 0 0 1 .07-.04l6.737-3.368a.769.769 0 0 1 .074-.032A3.5 3.5 0 1 1 22 5.5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgShare);
export default ForwardRef;
