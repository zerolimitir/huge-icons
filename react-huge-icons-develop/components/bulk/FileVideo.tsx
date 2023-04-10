import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFileVideo = (
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
            d='M3 18V6a4 4 0 0 1 4-4h6l8 8v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M13 6V2l8 8h-4a4 4 0 0 1-4-4Zm-3 11.131v-4.263a1 1 0 0 1 1.555-.832l3.197 2.132a1 1 0 0 1 0 1.664l-3.197 2.131A1 1 0 0 1 10 17.131Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFileVideo);
export default ForwardRef;
