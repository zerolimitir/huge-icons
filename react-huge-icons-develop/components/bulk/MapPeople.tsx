import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMapPeople = (
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
            d='M10.63 6.659C9.865 6.206 9.026 5.91 8 6.025c-1.867.209-4.14 1.757-5.278 2.617A1.86 1.86 0 0 0 2 10.137v9.67c0 .853 1.028 1.348 1.736.872 1.21-.813 2.853-1.736 4.264-1.894 1.66-.186 2.83.705 4 1.595s2.34 1.78 4 1.595c1.867-.209 4.14-1.757 5.278-2.617A1.86 1.86 0 0 0 22 17.863v-9.67c0-.853-1.028-1.348-1.736-.872-.11.074-.224.15-.341.224l.069.144c.326.705.508 1.489.508 2.311a2.5 2.5 0 0 1-2 2.45V14a3.5 3.5 0 1 1-7 0v-1.55a2.5 2.5 0 0 1-2-2.45 5.482 5.482 0 0 1 1.13-3.341Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M15 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0a3.993 3.993 0 0 0-3.466 2.002A3.983 3.983 0 0 0 11 10a1 1 0 0 0 1 1 1 1 0 0 1 1 1v2a2 2 0 1 0 4 0v-2a1 1 0 0 1 1-1 1 1 0 0 0 1-1 4 4 0 0 0-4-4Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapPeople);
export default ForwardRef;
