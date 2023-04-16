import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBoxTime = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.225 2.142a3.538 3.538 0 0 0-1.005.349 3.322 3.322 0 0 0-.95.664 3.906 3.906 0 0 0-1.211 2.24c-.088.502-.088 12.828 0 13.33.071.406.202.801.391 1.175.415.825 1.275 1.586 2.145 1.901.731.265.649.259 3.825.259 2.871 0 2.881 0 3.165-.09a2.019 2.019 0 0 0 1.355-1.438c.05-.189.06-.612.061-2.45 0-2.444.006-2.52.244-2.965.211-.396.567-.713 1.035-.92l.22-.097 2.92-.021c2.886-.021 2.923-.022 3.186-.111a2.04 2.04 0 0 0 1.334-1.436c.088-.338.089-6.635.001-7.137a3.852 3.852 0 0 0-1.036-2.065 4.225 4.225 0 0 0-1.885-1.14l-.32-.09-6.6-.007c-5.456-.005-6.648.003-6.875.049M15.991 5.75c-.011 2.157-.012 2.192-.097 2.35-.237.439-.73.636-1.229.493-.136-.039-.336-.217-1.125-.995-.528-.522-1.023-.981-1.1-1.022-.194-.103-.685-.103-.88-.001-.077.041-.554.485-1.06.988-1.003.996-1.114 1.075-1.5 1.075-.377 0-.712-.202-.894-.538-.085-.158-.086-.193-.097-2.35l-.012-2.19h8.006l-.012 2.19m.903 9.466c-.779.149-1.38.472-1.918 1.03a3.149 3.149 0 0 0-.695 1.032c-.207.501-.259.777-.259 1.362 0 .759.165 1.329.556 1.917.466.701 1.156 1.199 2.013 1.45.42.123 1.332.131 1.729.015a3.979 3.979 0 0 0 1.073-.478 3.486 3.486 0 0 0 1.32-4.184c-.305-.782-.97-1.486-1.757-1.858-.607-.288-1.444-.404-2.062-.286m.55 1.915c.193.13.231.283.234.939l.002.57h.462c.518 0 .657.044.757.239a.522.522 0 0 1-.02.513c-.132.217-.266.248-1.059.248-.793 0-.927-.031-1.059-.248-.075-.123-.081-.2-.081-1.087v-.954l.155-.156c.129-.128.183-.155.314-.155.099 0 .21.034.295.091'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBoxTime);
export default ForwardRef;