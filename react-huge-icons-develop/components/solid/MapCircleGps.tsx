import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMapCircleGps = (
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
            d='M4.522 7.416c-.715.433-1.347.884-1.8 1.226A1.86 1.86 0 0 0 2 10.137v9.67c0 .853 1.028 1.348 1.736.872 1.21-.813 2.853-1.736 4.264-1.894 1.66-.186 2.83.705 4 1.595s2.34 1.781 4 1.595c1.867-.209 4.14-1.757 5.278-2.617A1.86 1.86 0 0 0 22 17.863v-9.67c0-.853-1.028-1.348-1.736-.872-.24.162-.497.327-.766.49a7.893 7.893 0 0 1-.038.968A7.501 7.501 0 0 1 4.523 7.416Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M17.968 8.624A6 6 0 1 0 6.032 7.375a6 6 0 0 0 11.936 1.25Zm-8.72-.208 1.515.505a.5.5 0 0 1 .316.316l.505 1.515a.5.5 0 0 0 .934.04l1.99-4.643a.5.5 0 0 0-.657-.657L9.21 7.482a.5.5 0 0 0 .039.934Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapCircleGps);
export default ForwardRef;
