import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgActivity = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.698 7.315a.913.913 0 0 0-.273.207c-.062.073-.516.939-1.009 1.925L7.52 11.24l-.83.001c-.721.001-.851.01-.99.075a.745.745 0 0 0 .029 1.382c.122.051.348.062 1.28.061 1.253-.001 1.344-.017 1.556-.268.055-.066.388-.689.738-1.385.35-.696.648-1.265.66-1.265.013-.001.777 1.693 1.697 3.764.92 2.071 1.719 3.819 1.775 3.886a.84.84 0 0 0 .565.267c.176 0 .43-.115.558-.253.06-.065.454-.998 1.022-2.416l.925-2.309.857-.02c.916-.021.99-.037 1.186-.247a.745.745 0 0 0-.248-1.197c-.144-.067-.276-.074-1.3-.074-1.265 0-1.352.015-1.567.269-.059.071-.386.833-.776 1.806-.37.926-.682 1.683-.695 1.683-.012 0-.758-1.659-1.659-3.685-.9-2.026-1.682-3.739-1.738-3.805a.737.737 0 0 0-.867-.195'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgActivity);
export default ForwardRef;
