import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBoxArrowDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.225 2.142a3.538 3.538 0 0 0-1.005.349 3.322 3.322 0 0 0-.95.664 3.906 3.906 0 0 0-1.211 2.24c-.088.502-.088 12.828 0 13.33.071.406.202.801.391 1.175.415.825 1.275 1.586 2.145 1.901.731.265.649.259 3.825.259 2.871 0 2.881 0 3.165-.09a2.019 2.019 0 0 0 1.355-1.438c.05-.189.06-.612.061-2.45 0-2.444.006-2.52.244-2.965.211-.396.567-.713 1.035-.92l.22-.097 2.92-.021c2.886-.021 2.923-.022 3.186-.111a2.04 2.04 0 0 0 1.334-1.436c.088-.338.089-6.635.001-7.137a3.852 3.852 0 0 0-1.036-2.065 4.225 4.225 0 0 0-1.885-1.14l-.32-.09-6.6-.007c-5.456-.005-6.648.003-6.875.049M15.991 5.75c-.011 2.157-.012 2.192-.097 2.35-.237.439-.73.636-1.229.493-.136-.039-.336-.217-1.125-.995-.528-.522-1.023-.981-1.1-1.022-.194-.103-.685-.103-.88-.001-.077.041-.554.485-1.06.988-1.003.996-1.114 1.075-1.5 1.075-.377 0-.712-.202-.894-.538-.085-.158-.086-.193-.097-2.35l-.012-2.19h8.006l-.012 2.19m1.949 9.67c-.204.071-.399.294-.456.519-.029.117-.044.816-.044 2.068v1.892l-.41-.408c-.529-.526-.745-.618-1.101-.469a.71.71 0 0 0-.432.483c-.119.407-.031.55.909 1.48.842.832.992.937 1.481 1.039.435.091.923-.01 1.293-.267.279-.194 1.652-1.604 1.719-1.766.156-.378-.032-.803-.428-.969-.356-.149-.573-.057-1.101.469l-.41.408-.001-1.96c-.001-1.814-.006-1.971-.074-2.121a.779.779 0 0 0-.476-.416c-.193-.054-.274-.051-.469.018'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBoxArrowDown);
export default ForwardRef;