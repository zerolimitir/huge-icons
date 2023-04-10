import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgUsersDouble = (
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
            d='M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 10c3.866 0 7-1.79 7-4s-3.134-4-7-4-7 1.79-7 4 3.134 4 7 4Zm3.961-10.184A5.482 5.482 0 0 0 15.5 7c0-.705-.133-1.378-.374-1.997a3 3 0 1 1-1.165 5.813ZM18.5 17c0 .539-.12 1.06-.343 1.552C19.863 18.021 21 17.078 21 16c0-1.506-2.22-2.753-5.113-2.967 1.61 1 2.613 2.408 2.613 3.967Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgUsersDouble);
export default ForwardRef;
