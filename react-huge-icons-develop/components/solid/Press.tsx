import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPress = (
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
            d='M6.75 8a5.25 5.25 0 0 1 10.5 0 .75.75 0 0 0 1.5 0 6.75 6.75 0 0 0-13.5 0 .75.75 0 1 0 1.5 0ZM10 13V7a2 2 0 1 1 4 0v6h2a4 4 0 0 1 4 4v.438a4 4 0 0 1-.527 1.984l-.321.563A4 4 0 0 1 15.679 22h-4.103a4 4 0 0 1-3.642-2.345l-2.649-5.827A2 2 0 0 1 7.106 11h.066a2 2 0 0 1 1.414.586L10 13Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPress);
export default ForwardRef;
