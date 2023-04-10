import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgItalic = (
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
            d='M12 4.25a.75.75 0 0 0 0 1.5v-1.5Zm4 1.5a.75.75 0 0 0 0-1.5v1.5Zm-4 0h4v-1.5h-4v1.5Z'
        />
        <path
            fill='currentColor'
            d='M14.721 5.206a.75.75 0 1 0-1.442-.412l1.442.412ZM9.28 18.794a.75.75 0 1 0 1.442.412l-1.442-.412Zm4-14-4 14 1.442.412 4-14-1.442-.412Z'
        />
        <path
            fill='currentColor'
            d='M8 18.25a.75.75 0 0 0 0 1.5v-1.5Zm4 1.5a.75.75 0 0 0 0-1.5v1.5Zm-4 0h4v-1.5H8v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgItalic);
export default ForwardRef;
