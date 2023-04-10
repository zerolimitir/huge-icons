import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBookRemove = (
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
            d='M14.773 7.53a.75.75 0 1 0-1.06-1.06l1.06 1.06ZM9.47 10.712a.75.75 0 0 0 1.06 1.061l-1.06-1.06Zm4.242 1.061a.75.75 0 0 0 1.061-1.06l-1.06 1.06ZM10.53 6.47a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm3.182 0L9.47 10.712l1.06 1.061 4.243-4.243-1.06-1.06Zm1.061 4.242L10.53 6.47 9.47 7.53l4.242 4.243 1.061-1.06ZM7 2.75h10v-1.5H7v1.5ZM4.75 19V5h-1.5v14h1.5Zm14.5-14v11h1.5V5h-1.5ZM17 2.75A2.25 2.25 0 0 1 19.25 5h1.5A3.75 3.75 0 0 0 17 1.25v1.5ZM7 1.25A3.75 3.75 0 0 0 3.25 5h1.5A2.25 2.25 0 0 1 7 2.75v-1.5Zm0 15.5h13v-1.5H7v1.5ZM19.25 16v3h1.5v-3h-1.5ZM17 21.25H7v1.5h10v-1.5Zm-10 0A2.25 2.25 0 0 1 4.75 19h-1.5A3.75 3.75 0 0 0 7 22.75v-1.5ZM19.25 19A2.25 2.25 0 0 1 17 21.25v1.5A3.75 3.75 0 0 0 20.75 19h-1.5ZM7 15.25A3.75 3.75 0 0 0 3.25 19h1.5A2.25 2.25 0 0 1 7 16.75v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBookRemove);
export default ForwardRef;
