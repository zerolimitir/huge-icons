import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgAmbulance = (
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
            d='M6 3h3.5a4 4 0 0 1 4 4v12h-3a3.5 3.5 0 0 0-6.907-.805A3.994 3.994 0 0 1 2 15V7a4 4 0 0 1 4-4Zm0 4.25a.75.75 0 0 1 .75.75v1.25h2.5V8a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-1.5 0v-1.25h-2.5V12a.75.75 0 0 1-1.5 0V8A.75.75 0 0 1 6 7.25Zm9 9.946a3.5 3.5 0 0 1 6.446 1.186c.343-.359.554-.846.554-1.382v-5.383a2 2 0 0 0-.632-1.46l-2.791-2.616A2 2 0 0 0 17.209 7H15v10.196ZM9 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm11 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAmbulance);
export default ForwardRef;
