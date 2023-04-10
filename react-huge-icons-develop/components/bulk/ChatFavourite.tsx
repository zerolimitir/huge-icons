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
            d='M13 3h-2a9 9 0 0 0-9 9v5a4 4 0 0 0 4 4h7a9 9 0 1 0 0-18Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M12 8c.36 0 .68.242.792.599l.56 1.795h1.815c.361 0 .68.242.792.598a.886.886 0 0 1-.302.969l-1.468 1.11.56 1.795a.886.886 0 0 1-.302.969.807.807 0 0 1-.979 0L12 14.725l-1.468 1.11a.807.807 0 0 1-.979 0 .886.886 0 0 1-.302-.969l.56-1.795-1.468-1.11a.886.886 0 0 1-.302-.969.837.837 0 0 1 .792-.598h1.814l.561-1.795A.836.836 0 0 1 12 8Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChatFavourite);
export default ForwardRef;
