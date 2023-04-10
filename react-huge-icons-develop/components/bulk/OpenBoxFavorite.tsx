import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgOpenBoxFavorite = (
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
            d='M20 16.764V8l-8 2-8-2v8.764a2 2 0 0 0 1.106 1.789l6 3a2 2 0 0 0 1.788 0l6-3A2 2 0 0 0 20 16.763Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='m20 6-7.106-3.553a2 2 0 0 0-1.788 0L4 6l8 4 8-4Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='m20 6-8 4 2 3 8-4-2-3ZM4 6l8 4-2 3-8-4 2-3Zm8.23-3.5-.23.24-.23-.24a1.568 1.568 0 0 0-2.295 0 1.768 1.768 0 0 0 0 2.412L11.082 6.6a1.254 1.254 0 0 0 1.836 0l1.607-1.688a1.768 1.768 0 0 0 0-2.412 1.568 1.568 0 0 0-2.296 0Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgOpenBoxFavorite);
export default ForwardRef;
