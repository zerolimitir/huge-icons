import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArrowSortRectangleHalf = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.7 7.316c-.183.086-2.358 2.253-2.392 2.384-.061.236-.062.307-.01.481.077.256.27.447.523.521.179.052.226.052.399 0 .16-.048.269-.132.608-.47l.412-.411.001 3.16c.001 2.986.005 3.168.075 3.319a.743.743 0 0 0 1.368 0c.071-.152.074-.359.074-4.3s-.003-4.148-.074-4.3c-.181-.393-.608-.559-.984-.384m4 0a.734.734 0 0 0-.398.413c-.055.131-.062.64-.061 4.28.001 3.931.004 4.139.075 4.291.175.38.586.551.955.399.16-.066 2.291-2.156 2.386-2.339a.767.767 0 0 0-.144-.868c-.131-.135-.48-.273-.597-.236-.031.009-.11.029-.175.044-.078.017-.269.174-.55.451l-.431.424-.001-3.157c-.001-2.985-.005-3.167-.075-3.318-.181-.392-.607-.558-.984-.384'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowSortRectangleHalf);
export default ForwardRef;
