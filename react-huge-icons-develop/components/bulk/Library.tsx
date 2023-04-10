import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLibrary = (
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
            d='M12 14S7 9.761 7 7c0-.207.013-.412.037-.613-.789-.18-1.556-.3-2.242-.377C3.807 5.9 3 6.715 3 7.72v10.013c0 1.006.807 1.821 1.795 1.931 1.996.223 4.679.822 6.59 2.145a1.08 1.08 0 0 0 1.23 0c1.911-1.323 4.594-1.922 6.59-2.145.988-.11 1.795-.925 1.795-1.93V7.72c0-1.005-.807-1.82-1.795-1.71a20.37 20.37 0 0 0-2.242.377c.024.201.037.406.037.613 0 2.761-5 7-5 7Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M16.963 6.387c.024.201.037.406.037.613 0 2.761-5 7-5 7S7 9.761 7 7a5 5 0 0 1 9.963-.613ZM12 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M11.385 21.81c.184.127.4.19.615.19.216 0 .431-.063.615-.19l.135-.092v-8.394c-.451.423-.75.676-.75.676s-.299-.253-.75-.676v8.394c.046.03.09.06.135.092Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLibrary);
export default ForwardRef;
