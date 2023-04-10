import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgDirectionLeftDouble = (
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
            d='M17.586 7.469a.75.75 0 1 0-1.172-.937l-4 5a.75.75 0 0 0 0 .937l4 5a.75.75 0 1 0 1.172-.938L13.96 12l3.626-4.531Zm-6 0a.75.75 0 1 0-1.172-.937l-4 5a.75.75 0 0 0 0 .937l4 5a.75.75 0 1 0 1.172-.938L7.96 12l3.626-4.531Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDirectionLeftDouble);
export default ForwardRef;
