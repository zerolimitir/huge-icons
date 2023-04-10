import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFilesReverse = (
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
            d='M17 14h-.75.75Zm-4 4v-.75.75ZM3 14h-.75H3Zm0-4.343h.75H3ZM10.657 2v.75V2ZM13 2v-.75V2ZM4.172 6.828l.53.53-.53-.53Zm3.656-3.656.53.53-.53-.53ZM21 10h-.75.75Zm0 8h.75H21Zm-4 4v-.75.75Zm-6 0v.75V22ZM9 4h-.75H9ZM5 8v.75V8Zm11.25-2v8h1.5V6h-1.5ZM13 17.25H7v1.5h6v-1.5ZM3.75 14V9.657h-1.5V14h1.5Zm6.907-11.25H13v-1.5h-2.343v1.5ZM4.702 7.359l3.657-3.657-1.06-1.06L3.64 6.297l1.06 1.06Zm5.955-6.109c-1.26 0-2.468.5-3.359 1.391l1.06 1.06a3.25 3.25 0 0 1 2.299-.951v-1.5ZM3.75 9.657c0-.862.342-1.689.952-2.298l-1.06-1.06A4.75 4.75 0 0 0 2.25 9.656h1.5ZM16.25 14A3.25 3.25 0 0 1 13 17.25v1.5A4.75 4.75 0 0 0 17.75 14h-1.5Zm1.5-8A4.75 4.75 0 0 0 13 1.25v1.5A3.25 3.25 0 0 1 16.25 6h1.5ZM7 17.25A3.25 3.25 0 0 1 3.75 14h-1.5A4.75 4.75 0 0 0 7 18.75v-1.5ZM20.25 10v8h1.5v-8h-1.5ZM17 21.25h-6v1.5h6v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5Zm1.5-8A4.75 4.75 0 0 0 17 5.25v1.5A3.25 3.25 0 0 1 20.25 10h1.5ZM11 21.25A3.25 3.25 0 0 1 7.75 18h-1.5A4.75 4.75 0 0 0 11 22.75v-1.5ZM8.25 2v2h1.5V2h-1.5ZM5 7.25H3v1.5h2v-1.5ZM8.25 4A3.25 3.25 0 0 1 5 7.25v1.5A4.75 4.75 0 0 0 9.75 4h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFilesReverse);
export default ForwardRef;
