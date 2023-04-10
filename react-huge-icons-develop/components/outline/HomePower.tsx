import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHomePower = (
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
            d='m4.47 7.027-.477-.58.477.58Zm5-4.118-.477-.579.477.58Zm5.06 0-.477.58.477-.58Zm5 4.118-.477.579.477-.58ZM12.75 10a.75.75 0 0 0-1.5 0h1.5Zm-1.5 2a.75.75 0 0 0 1.5 0h-1.5Zm4.312-1.142a.75.75 0 0 0-1.124.992l1.124-.992Zm-6 .992a.75.75 0 0 0-1.124-.992l1.124.992Zm10.688-1.7v7.817h1.5V10.15h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 17.967V10.15h-1.5v7.817h1.5ZM4.947 7.606l5-4.118-.954-1.158-5 4.118.954 1.157Zm9.106-4.118 5 4.117.954-1.157-5-4.118-.954 1.158Zm-4.106 0a3.225 3.225 0 0 1 4.106 0l.954-1.158a4.725 4.725 0 0 0-6.014 0l.954 1.158ZM7 21.25c-1.79 0-3.25-1.464-3.25-3.283h-1.5c0 2.636 2.12 4.783 4.75 4.783v-1.5Zm13.25-3.283c0 1.819-1.46 3.283-3.25 3.283v1.5c2.63 0 4.75-2.147 4.75-4.783h-1.5Zm1.5-7.817a4.796 4.796 0 0 0-1.743-3.702l-.954 1.157a3.296 3.296 0 0 1 1.197 2.545h1.5Zm-18 0c0-.988.44-1.922 1.197-2.545l-.954-1.157A4.796 4.796 0 0 0 2.25 10.15h1.5Zm7.5-.15v2h1.5v-2h-1.5Zm4 4A3.25 3.25 0 0 1 12 17.25v1.5A4.75 4.75 0 0 0 16.75 14h-1.5ZM12 17.25A3.25 3.25 0 0 1 8.75 14h-1.5A4.75 4.75 0 0 0 12 18.75v-1.5Zm2.438-5.4c.506.574.812 1.325.812 2.15h1.5a4.735 4.735 0 0 0-1.188-3.142l-1.124.992ZM8.75 14c0-.825.306-1.576.812-2.15l-1.124-.992A4.735 4.735 0 0 0 7.25 14h1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHomePower);
export default ForwardRef;
