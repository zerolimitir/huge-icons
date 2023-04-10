import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgDirectionRightDouble = (
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
            d='M6.414 7.469a.75.75 0 1 1 1.172-.937l4 5a.75.75 0 0 1 0 .937l-4 5a.75.75 0 1 1-1.172-.938L10.04 12 6.414 7.469Zm6 0a.75.75 0 1 1 1.172-.937l4 5a.75.75 0 0 1 0 .937l-4 5a.75.75 0 1 1-1.172-.938L16.04 12l-3.626-4.531Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDirectionRightDouble);
export default ForwardRef;
