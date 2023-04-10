import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSignpostBig = (
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
            d='M12.5 2h-1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M16.495 9H5.687a1 1 0 0 1-.664-.253l-1.687-1.5a1 1 0 0 1 0-1.494l1.687-1.5A1 1 0 0 1 5.688 4h10.807a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1Zm-8.529 7h10.438c.237 0 .465-.09.642-.253l1.63-1.5a1.024 1.024 0 0 0 0-1.494l-1.63-1.5a.947.947 0 0 0-.642-.253H7.966C7.432 11 7 11.448 7 12v3c0 .552.432 1 .966 1Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSignpostBig);
export default ForwardRef;
