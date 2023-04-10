import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMapPin = (
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
            d='M13.75 8.788C13.13 8.48 12.565 8.05 12 7.62c-1.17-.89-2.34-1.78-4-1.595-1.519.17-3.305 1.225-4.532 2.076C2.507 8.77 2 9.89 2 11.06v8.748c0 .853 1.028 1.348 1.736.872 1.21-.813 2.853-1.736 4.264-1.894 1.66-.186 2.83.705 4 1.595s2.34 1.78 4 1.595c1.519-.17 3.305-1.225 4.532-2.077.961-.667 1.468-1.787 1.468-2.957V8.194c0-.854-1.028-1.349-1.736-.873a16.63 16.63 0 0 1-2.014 1.172V12a2.25 2.25 0 0 1-4.5 0V8.788Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M16.75 5.855a2 2 0 1 0-1.5 0V12a.75.75 0 0 0 1.5 0V5.855Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapPin);
export default ForwardRef;
