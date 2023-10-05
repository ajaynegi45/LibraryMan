import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import {useGlobalContext} from "../Context.jsx";
import "../assets/styles/Gitashlok.css"

const Gitashlok = () => {
    const {verse} = useGlobalContext();

    console.log("This is gita sholok: ",verse);

    if (!verse || !verse.tej || !verse.tej.author) {
        return null; // Render nothing or an alternative component while data is loading
    }



    return (
        <>
            <h1 id={"shlok-title"}>||श्रीमद्‍भगवद्‍-गीता ||</h1>

            <div id={"shlok-information"}>
                <h4>{verse.slok}</h4>
                <h4>{verse.transliteration}</h4>
                <p><span>Chapter</span>: {verse.chapter} <span>Shlok</span>: {verse.verse}</p>
            </div>

            <Accordion defaultActiveKey={['0']} alwaysOpen>

                <Accordion.Item eventKey="0">
                    <Accordion.Header>{verse.tej.author}</Accordion.Header>
                    <Accordion.Body>
                        {verse.tej?.ht}
                    </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="1">
                    <Accordion.Header>{verse.siva.author}</Accordion.Header>
                    <Accordion.Body>
                        {verse.siva?.et} <br/> <br/>
                        {verse.siva?.ec}
                    </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="2">
                    <Accordion.Header>{verse.purohit.author}</Accordion.Header>
                    <Accordion.Body>
                        {verse.purohit?.et}
                    </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="3">
                    <Accordion.Header>{verse.chinmay.author}</Accordion.Header>
                    <Accordion.Body>
                        {verse.chinmay?.hc}
                    </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="4">
                    <Accordion.Header>{verse.san.author}</Accordion.Header>
                    <Accordion.Body>
                        {verse.san?.et}
                    </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="5">
                    <Accordion.Header>{verse.adi.author}</Accordion.Header>
                    <Accordion.Body>
                        {verse.adi?.et}
                    </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="6">
                    <Accordion.Header>{verse.gambir.author}</Accordion.Header>
                    <Accordion.Body>
                        {verse.gambir?.et}
                    </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="7">
                    <Accordion.Header>{verse.madhav.author}</Accordion.Header>
                    <Accordion.Body>
                        {verse.madhav?.sc}
                    </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="8">
                    <Accordion.Header>{verse.anand.author}</Accordion.Header>
                    <Accordion.Body>
                        {verse.anand?.sc}
                    </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="9">
                    <Accordion.Header>{verse.rams.author}</Accordion.Header>
                    <Accordion.Body>
                        {verse.rams?.ht} <br/> <br/>
                        {verse.rams?.hc}
                    </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="10">
                    <Accordion.Header>{verse.raman.author}</Accordion.Header>
                    <Accordion.Body>
                        {verse.raman?.sc} <br/> <br/>
                        {verse.raman?.et}
                    </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="11">
                    <Accordion.Header>{verse.abhinav.author}</Accordion.Header>
                    <Accordion.Body>
                        {verse.abhinav?.sc} <br/> <br/>
                        {verse.abhinav?.et}
                    </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="12">
                    <Accordion.Header>{verse.sankar.author}</Accordion.Header>
                    <Accordion.Body>
                        {verse.sankar?.ht} <br/> <br/>
                        {verse.sankar?.sc} <br/> <br/>
                        {verse.sankar?.et}
                    </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="13">
                    <Accordion.Header>{verse.jaya.author}</Accordion.Header>
                    <Accordion.Body>
                        {verse.jaya?.sc}
                    </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="14">
                    <Accordion.Header>{verse.vallabh.author}</Accordion.Header>
                    <Accordion.Body>
                        {verse.vallabh?.sc}
                    </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="15">
                    <Accordion.Header>{verse.ms.author}</Accordion.Header>
                    <Accordion.Body>
                        {verse.ms?.sc}
                    </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="16">
                    <Accordion.Header>{verse.srid.author}</Accordion.Header>
                    <Accordion.Body>
                        {verse.srid?.sc}
                    </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="17">
                    <Accordion.Header>{verse.dhan.author}</Accordion.Header>
                    <Accordion.Body>
                        {verse.dhan?.sc}
                    </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="18">
                     <Accordion.Header>{verse.venkat.author}</Accordion.Header>
                         <Accordion.Body style={{
                          overflow: 'hidden',
                          whiteSpace: 'normal',
                          wordBreak: 'break-all',
                       }}>
                         {verse.venkat?.sc}
                         </Accordion.Body>
                     </Accordion.Item>


                <Accordion.Item eventKey="19">
                    <Accordion.Header>{verse.puru.author}</Accordion.Header>
                    <Accordion.Body>
                        {verse.puru?.sc}
                    </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="20">
                    <Accordion.Header>{verse.neel.author}</Accordion.Header>
                    <Accordion.Body>
                        {verse.neel?.sc}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
};

export default Gitashlok;