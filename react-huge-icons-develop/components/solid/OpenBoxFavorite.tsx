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
            fillRule='evenodd'
            d='m12.23 2.562-.23.24-.23-.24a1.568 1.568 0 0 0-2.295 0 1.768 1.768 0 0 0 0 2.412l1.607 1.688a1.254 1.254 0 0 0 1.836 0l1.607-1.688a1.768 1.768 0 0 0 0-2.412 1.568 1.568 0 0 0-2.296 0ZM4 11.739v5.087a2 2 0 0 0 1.106 1.789l6 3a2 2 0 0 0 1.788 0l6-3A2 2 0 0 0 20 16.826V11.74l-5.33 2.665a1.5 1.5 0 0 1-1.918-.51L12 12.766l-.752 1.128a1.5 1.5 0 0 1-1.919.51L4 11.739Zm7.976-1.661-7.96-3.992-1.987 2.956 8.002 4.023 1.945-2.987Zm0 0 2.022 2.987 8.02-3.965-2.027-2.988-8.015 3.966Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgOpenBoxFavorite);
export default ForwardRef;
