import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFormatClear = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='m8.06 4.999.759.761H9.97c.632 0 1.15.016 1.15.035 0 .018-.063.473-.141 1.009l-.14.974.649.65c.357.358.661.637.675.621.013-.016.109-.632.213-1.369l.231-1.63.043-.29h2.705c1.85 0 2.755-.014 2.864-.045.212-.058.441-.293.5-.511.089-.331-.03-.638-.325-.832l-.168-.112-5.463-.011-5.463-.01.76.76m-3.388-.637a.692.692 0 0 0-.384.595c-.012.164.003.269.051.367.038.075 1.4 1.469 3.027 3.099l2.959 2.962-.545 3.816c-.354 2.475-.537 3.866-.52 3.958.091.506.699.773 1.128.494.313-.202.288-.089.801-3.672l.467-3.265 3.442 3.438c1.893 1.891 3.5 3.467 3.57 3.502.254.127.673.048.857-.162a.78.78 0 0 0 .118-.846c-.119-.226-14.146-14.23-14.332-14.307a.8.8 0 0 0-.639.021'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFormatClear);
export default ForwardRef;
