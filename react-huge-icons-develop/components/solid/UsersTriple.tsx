import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgUsersTriple = (
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
            d='M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 8c3.314 0 6-1.343 6-3s-2.686-3-6-3-6 1.343-6 3 2.686 3 6 3Zm-5.618-5.981C3.912 13.171 2 14.224 2 15.5c0 1.052 1.3 1.952 3.14 2.321-.412-.556-.64-1.173-.64-1.82 0-1.144.71-2.188 1.882-2.982ZM19.5 16c0 .648-.228 1.265-.64 1.821 1.84-.369 3.14-1.269 3.14-2.32 0-1.277-1.912-2.33-4.382-2.482C18.79 13.813 19.5 14.857 19.5 16Zm-3.782-5.465a4.518 4.518 0 0 0 .69-3.446 2 2 0 1 1-.69 3.446ZM7 7a2 2 0 0 1 .592.09 4.52 4.52 0 0 0 .69 3.445A2 2 0 1 1 7 7Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgUsersTriple);
export default ForwardRef;
