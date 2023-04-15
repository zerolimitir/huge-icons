import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHeading = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M5.807 4.289c-.249.053-.465.281-.523.549-.062.291-.062 14.033 0 14.324.163.758 1.269.758 1.432 0 .03-.14.044-1.193.044-3.304V12.76h10.48v3.098c0 2.111.014 3.164.044 3.304.163.758 1.269.758 1.432 0 .062-.291.062-14.033 0-14.324-.163-.758-1.269-.758-1.432 0-.03.14-.044 1.193-.044 3.304v3.098H6.76l-.001-3.11c-.001-1.992-.016-3.174-.042-3.289-.097-.421-.47-.647-.91-.552'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHeading);
export default ForwardRef;
