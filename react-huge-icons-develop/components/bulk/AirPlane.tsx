import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgAirPlane = (
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
            d='m16.684 20.306-1.887-2.564a2.029 2.029 0 0 1-.402-1.204V4.395a2.395 2.395 0 0 0-4.79 0v12.143c0 .428-.14.847-.402 1.204l-1.887 2.564c-.681.927.434 2.071 1.532 1.573l2.08-.943a2.618 2.618 0 0 1 2.143 0l2.081.943c1.099.498 2.213-.646 1.532-1.573Z'
        />
        <path
            fill='currentColor'
            d='m8.479 8.064-4.914 2.784c-1.02.578-.568 2.005.635 2.005h4.207c.662 0 1.198.486 1.198 1.086V6.224c0 .748-.426 1.444-1.126 1.84Zm11.956 2.784-4.914-2.784c-.7-.396-1.126-1.092-1.126-1.84v7.715c0-.6.536-1.085 1.198-1.085H19.8c1.203 0 1.655-1.428.635-2.006Z'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAirPlane);
export default ForwardRef;
