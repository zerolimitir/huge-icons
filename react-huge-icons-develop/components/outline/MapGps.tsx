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
            stroke='currentColor'
            strokeWidth={1.5}
            d='M19 16.862a20.527 20.527 0 0 0 2.278-1.504A1.86 1.86 0 0 0 22 13.863v-9.67c0-.853-1.028-1.348-1.736-.872-1.21.813-2.853 1.736-4.264 1.894-3.318.371-4.682-3.562-8-3.19-1.867.209-4.14 1.757-5.278 2.617A1.86 1.86 0 0 0 2 6.137v9.67c0 .853 1.028 1.348 1.736.872 1.21-.813 2.853-1.736 4.264-1.894.806-.09 1.497.074 2.129.368'
        />
        <path
            stroke='currentColor'
            strokeWidth={1.5}
            d='m13.633 17.684-2.894-.965c-.84-.28-.964-1.333-.372-1.841.103-.088.226-.16.371-.208l7.838-2.613a1.08 1.08 0 0 1 1.367 1.367l-1.378 4.131-1.235 3.706c-.328.985-1.721.985-2.05 0l-.964-2.894a1.08 1.08 0 0 0-.683-.683Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapGps);
export default ForwardRef;
