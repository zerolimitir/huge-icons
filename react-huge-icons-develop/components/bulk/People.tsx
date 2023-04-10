import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPeople = (
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
            d='M8.5 16h-.626A4 4 0 0 0 4.8 17.44l-1.067 1.28C2.648 20.022 3.574 22 5.27 22h13.46c1.696 0 2.622-1.978 1.537-3.28L19.2 17.44A4 4 0 0 0 16.127 16H15.5a3.5 3.5 0 1 1-7 0Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0a4 4 0 0 0-4 4v1a1 1 0 0 0 1 1 1 1 0 0 1 1 1v3a2 2 0 1 0 4 0v-3a1 1 0 0 1 1-1 1 1 0 0 0 1-1v-1a4 4 0 0 0-4-4Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPeople);
export default ForwardRef;
