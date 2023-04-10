import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFileReload = (
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
            d='M3 18h-.75H3ZM3 6h.75H3Zm4-4v-.75V2Zm10 0v-.75V2Zm4 4h-.75.75Zm0 6.343h.75H21ZM11.343 22v-.75.75ZM7 22v.75V22Zm12.828-6.828-.53-.53.53.53Zm-5.656 5.656.53.53-.53-.53ZM13 18h-.75.75Zm4-4v-.75.75Zm-6.213-8.5a.75.75 0 0 0 .498 1.414l-.498-1.415Zm3.37 4.286a.75.75 0 1 0 1.415.5l-1.414-.5Zm-4.243-1.5a.75.75 0 0 0-1.415-.5l1.415.5Zm3.371 4.286a.75.75 0 0 0-.498-1.414l.498 1.414ZM3.75 18V6h-1.5v12h1.5ZM7 2.75h10v-1.5H7v1.5ZM20.25 6v6.343h1.5V6h-1.5Zm-8.907 15.25H7v1.5h4.343v-1.5Zm7.955-6.609-5.657 5.657 1.06 1.06 5.658-5.656-1.06-1.06Zm-7.955 8.109c1.26 0 2.468-.5 3.359-1.391l-1.06-1.06a3.25 3.25 0 0 1-2.299.951v1.5Zm8.907-10.407a3.25 3.25 0 0 1-.952 2.298l1.06 1.06a4.75 4.75 0 0 0 1.392-3.358h-1.5ZM3.75 6A3.25 3.25 0 0 1 7 2.75v-1.5A4.75 4.75 0 0 0 2.25 6h1.5Zm-1.5 12A4.75 4.75 0 0 0 7 22.75v-1.5A3.25 3.25 0 0 1 3.75 18h-1.5ZM17 2.75A3.25 3.25 0 0 1 20.25 6h1.5A4.75 4.75 0 0 0 17 1.25v1.5ZM13.75 22v-4h-1.5v4h1.5ZM17 14.75h4v-1.5h-4v1.5ZM13.75 18A3.25 3.25 0 0 1 17 14.75v-1.5A4.75 4.75 0 0 0 12.25 18h1.5ZM11.285 6.914a2.25 2.25 0 0 1 2.342.53l1.06-1.06a3.75 3.75 0 0 0-3.9-.885l.498 1.415Zm2.342.53a2.25 2.25 0 0 1 .53 2.342l1.415.5a3.75 3.75 0 0 0-.884-3.902l-1.061 1.06Zm-3.182 3.183a2.25 2.25 0 0 1-.53-2.342l-1.416-.499a3.75 3.75 0 0 0 .885 3.902l1.06-1.061Zm2.341.53a2.25 2.25 0 0 1-2.341-.53l-1.06 1.06a3.75 3.75 0 0 0 3.9.885l-.498-1.414Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFileReload);
export default ForwardRef;
