import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMapGps = (
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
            d='M3.468 4.101C4.695 3.251 6.481 2.195 8 2.025c1.66-.186 2.83.704 4 1.595 1.17.89 2.34 1.78 4 1.595 1.411-.158 3.054-1.081 4.264-1.894.708-.476 1.736.02 1.736.873v8.747c0 1.17-.507 2.29-1.468 2.957-.321.223-.68.46-1.063.691l.897-2.691c.672-2.017-1.247-3.936-3.264-3.264l-7.838 2.613A2.523 2.523 0 0 0 7.65 14.84c-1.326.254-2.802 1.093-3.913 1.84-.708.476-1.736-.02-1.736-.872V7.059c0-1.17.507-2.29 1.468-2.958Z'
        />
        <path
            fill='currentColor'
            d='m12.633 17.684-2.894-.965c-.84-.28-.964-1.333-.372-1.841a1.1 1.1 0 0 1 .372-.208l7.837-2.613a1.08 1.08 0 0 1 1.367 1.367l-1.378 4.131-1.235 3.706c-.328.985-1.721.985-2.05 0l-.964-2.894a1.08 1.08 0 0 0-.683-.683Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapGps);
export default ForwardRef;
