import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFileAccept = (
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
            d='M3 18h-.75H3ZM3 6h.75H3Zm4-4v-.75V2Zm10 0v-.75V2Zm4 4h-.75.75Zm0 6.343h.75H21ZM11.343 22v-.75.75ZM7 22v.75V22Zm12.828-6.828-.53-.53.53.53Zm-5.656 5.656.53.53-.53-.53ZM13 18h-.75.75Zm4-4v-.75.75ZM9.469 7.414a.75.75 0 1 0-.938 1.172l.938-1.172Zm1.284 1.988-.469.586.469-.586Zm1.377-.122-.564-.494.564.494Zm3.434-2.786a.75.75 0 1 0-1.128-.988l1.128.988ZM3.75 18V6h-1.5v12h1.5ZM7 2.75h10v-1.5H7v1.5ZM20.25 6v6.343h1.5V6h-1.5Zm-8.907 15.25H7v1.5h4.343v-1.5Zm7.955-6.609-5.657 5.657 1.06 1.06 5.658-5.656-1.06-1.06Zm-7.955 8.109c1.26 0 2.468-.5 3.359-1.391l-1.06-1.06a3.25 3.25 0 0 1-2.299.951v1.5Zm8.907-10.407a3.25 3.25 0 0 1-.952 2.298l1.06 1.06a4.75 4.75 0 0 0 1.392-3.358h-1.5ZM3.75 6A3.25 3.25 0 0 1 7 2.75v-1.5A4.75 4.75 0 0 0 2.25 6h1.5Zm-1.5 12A4.75 4.75 0 0 0 7 22.75v-1.5A3.25 3.25 0 0 1 3.75 18h-1.5ZM17 2.75A3.25 3.25 0 0 1 20.25 6h1.5A4.75 4.75 0 0 0 17 1.25v1.5ZM13.75 22v-4h-1.5v4h1.5ZM17 14.75h4v-1.5h-4v1.5ZM13.75 18A3.25 3.25 0 0 1 17 14.75v-1.5A4.75 4.75 0 0 0 12.25 18h1.5ZM8.531 8.586l1.753 1.402.937-1.171L9.47 7.414l-.94 1.172Zm4.163 1.188 2.87-3.28-1.128-.988-2.87 3.28 1.128.988Zm-2.41.214a1.75 1.75 0 0 0 2.41-.214l-1.128-.988a.25.25 0 0 1-.345.03l-.937 1.172Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFileAccept);
export default ForwardRef;
