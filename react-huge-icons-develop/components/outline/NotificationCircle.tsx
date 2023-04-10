import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgNotificationCircle = (
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
            d='M17.25 14A7.25 7.25 0 0 1 10 21.25v1.5A8.75 8.75 0 0 0 18.75 14h-1.5ZM10 21.25A7.25 7.25 0 0 1 2.75 14h-1.5A8.75 8.75 0 0 0 10 22.75v-1.5ZM2.75 14A7.25 7.25 0 0 1 10 6.75v-1.5A8.75 8.75 0 0 0 1.25 14h1.5ZM17 11.25A4.25 4.25 0 0 1 12.75 7h-1.5A5.75 5.75 0 0 0 17 12.75v-1.5Zm0-8.5A4.25 4.25 0 0 1 21.25 7h1.5A5.75 5.75 0 0 0 17 1.25v1.5ZM12.75 7c0-.213.016-.421.046-.625l-1.484-.218A5.72 5.72 0 0 0 11.25 7h1.5Zm.046-.625A4.251 4.251 0 0 1 17 2.75v-1.5a5.75 5.75 0 0 0-5.688 4.907l1.484.218ZM10 6.75c.645 0 1.268.084 1.861.241l.384-1.45A8.762 8.762 0 0 0 10 5.25v1.5Zm7.009 5.389c.157.593.241 1.216.241 1.861h1.5c0-.775-.101-1.528-.291-2.245l-1.45.383ZM21.25 7a4.251 4.251 0 0 1-3.625 4.204l.218 1.484A5.751 5.751 0 0 0 22.75 7h-1.5Zm-3.625 4.204c-.204.03-.412.046-.625.046v1.5c.286 0 .568-.02.843-.062l-.218-1.484Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgNotificationCircle);
export default ForwardRef;
