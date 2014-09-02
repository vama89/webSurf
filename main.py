#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import webapp2

form="""
<form action="http://www.google.com/search">
		<p>
			<label>
				How much capital are you willing to invest?: 
			</label>
			
			<input type="text" name="inputbox" id="moneyInvested" placeholder="Ex.100,000" autofocus required>
		</p>

		<input type="checkbox" name="company" value="BA">BA<br>
		<input type="checkbox" name="company" value="BAC">BAC<br>
		<input type="checkbox" name="company" value="GE">GE<br>
		<input type="checkbox" name="company" value="MSFT">MSFT<br>
		<input type="checkbox" name="company" value="PEP">PEP<br>
		<input type="checkbox" name="company" value="PG">PG<br>
		<input type="checkbox" name="company" value="QCOM">QCOM<br>


		<br/>

		<input type="submit">

	</form>
"""

class MainPage(webapp2.RequestHandler):
    def get(self):
    	#self.response.headers['Content-Type'] = 'text/plain'
        self.response.write(form)

app = webapp2.WSGIApplication([('/', MainPage)], 
								debug=True)
