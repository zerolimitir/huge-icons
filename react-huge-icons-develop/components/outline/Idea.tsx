import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgIdea = (
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
            d='m16.808 14.087-.515-.545.515.545Zm-9.616 0 .515-.545-.515.545ZM10.53 8.47a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm4 1.06a.75.75 0 0 0-1.06-1.06l1.06 1.06ZM11.25 18a.75.75 0 0 0 1.5 0h-1.5ZM8 18.75h8v-1.5H8v1.5Zm4 2.5A3.25 3.25 0 0 1 8.75 18h-1.5A4.75 4.75 0 0 0 12 22.75v-1.5ZM15.25 18A3.25 3.25 0 0 1 12 21.25v1.5A4.75 4.75 0 0 0 16.75 18h-1.5Zm-9.5-9A6.25 6.25 0 0 1 12 2.75v-1.5A7.75 7.75 0 0 0 4.25 9h1.5ZM12 2.75A6.25 6.25 0 0 1 18.25 9h1.5A7.75 7.75 0 0 0 12 1.25v1.5ZM18.25 9a6.23 6.23 0 0 1-1.957 4.542l1.03 1.09A7.73 7.73 0 0 0 19.75 9h-1.5Zm-3 6.789V18h1.5v-2.211h-1.5Zm-7.543-2.247A6.23 6.23 0 0 1 5.75 9h-1.5a7.73 7.73 0 0 0 2.426 5.632l1.03-1.09ZM8.75 18v-2.211h-1.5V18h1.5Zm-2.074-3.368c.37.35.574.764.574 1.157h1.5c0-.915-.464-1.699-1.043-2.247l-1.03 1.09Zm9.617-1.09c-.58.548-1.043 1.332-1.043 2.247h1.5c0-.393.203-.806.574-1.157l-1.03-1.09ZM9.47 9.53l2 2 1.06-1.06-2-2-1.06 1.06Zm3.06 2 2-2-1.06-1.06-2 2 1.06 1.06ZM11.25 11v7h1.5v-7h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgIdea);
export default ForwardRef;
