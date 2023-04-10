import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgChatBlock = (
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
            d='M11 3h2a9 9 0 1 1 0 18H6a4 4 0 0 1-4-4v-5a9 9 0 0 1 9-9Zm-2 9c0-.556.151-1.077.415-1.524l4.109 4.109A3 3 0 0 1 9 12Zm6 0c0 .556-.151 1.077-.415 1.524l-4.109-4.109A3 3 0 0 1 15 12Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChatBlock);
export default ForwardRef;
