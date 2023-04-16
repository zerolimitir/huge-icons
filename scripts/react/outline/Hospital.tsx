import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHospital = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='#000'
            fillRule='evenodd'
            d='M7.579 1.279c-2.085.189-3.75 1.669-4.228 3.757l-.088.384-.013 7.906-.012 7.906-.732.014c-.716.014-.735.016-.894.121a.7.7 0 0 0-.345.64c0 .196.019.263.116.401a.939.939 0 0 0 .277.248l.16.084 10.06.011c7.219.007 10.12-.002 10.274-.034a.733.733 0 0 0 .368-1.235c-.202-.202-.391-.242-1.138-.242h-.622l-.012-7.91-.013-7.91-.088-.384c-.433-1.89-1.801-3.257-3.685-3.684-.38-.086-.426-.087-4.724-.095-2.387-.004-4.484.006-4.661.022M16.98 2.89c.538.184.878.4 1.304.826.426.426.642.766.826 1.304l.11.32.011 7.95.01 7.95h-3.475l-.017-2.37c-.014-2.008-.027-2.412-.082-2.645-.264-1.117-.916-1.986-1.879-2.506A3.483 3.483 0 0 0 12 13.271c-.68 0-1.197.129-1.788.448-.963.52-1.615 1.389-1.879 2.506-.055.233-.068.637-.082 2.645l-.017 2.37H4.759l.01-7.95.011-7.95.11-.32c.185-.539.4-.878.826-1.304.389-.388.701-.598 1.136-.765.495-.189.414-.186 5.248-.178l4.56.007.32.11m-5.165 1.387a.8.8 0 0 0-.462.354c-.091.146-.093.173-.106 1.376l-.012 1.228-1.231.012-1.23.013-.162.107a.7.7 0 0 0-.345.64c0 .196.019.263.116.401.227.321.273.33 1.644.345l1.208.012.012 1.228c.013 1.203.015 1.23.106 1.376.357.574 1.223.443 1.363-.207.026-.122.044-.653.044-1.304V8.76h1.098c1.286 0 1.445-.023 1.662-.24.398-.398.21-1.097-.331-1.234-.118-.029-.589-.046-1.307-.046H12.76l-.001-1.11c-.001-1.176-.025-1.392-.179-1.594-.159-.209-.502-.325-.765-.259m.763 10.544c.13.034.345.119.479.189.314.165.768.619.933.933.25.476.25.482.25 3.005v2.292H9.76v-2.292c0-1.928.01-2.328.061-2.526.19-.73.857-1.403 1.583-1.599.288-.077.881-.078 1.174-.002'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHospital);
export default ForwardRef;