import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgChatFavourite = (
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
            d='M11 3h2a9 9 0 1 1 0 18H6a4 4 0 0 1-4-4v-5a9 9 0 0 1 9-9Zm1.792 5.599A.836.836 0 0 0 12 8c-.36 0-.68.242-.792.599l-.56 1.795H8.832a.837.837 0 0 0-.792.598.886.886 0 0 0 .302.969l1.468 1.11-.56 1.795a.886.886 0 0 0 .302.969c.292.22.687.22.979 0L12 14.725l1.468 1.11c.292.22.687.22.979 0a.886.886 0 0 0 .302-.969l-.56-1.795 1.468-1.11a.886.886 0 0 0 .302-.969.837.837 0 0 0-.792-.598h-1.814l-.561-1.795Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChatFavourite);
export default ForwardRef;
